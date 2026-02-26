import { FFmpeg } from '@ffmpeg/ffmpeg';  //Import FFmpeg class from package
import { fetchFile, toBlobURL } from '@ffmpeg/util'; //Import utility functions for fetching files and converting to Blob URLs
import { useRef, useState } from 'react'; //Import React hooks for managing state and references

export function useFFmpeg() {
    const ffmpegRef = useRef(new FFmpeg()); //Create a reference to an instance of the FFmpeg class (Allows us to persist the FFmpeg instance across re-renders)
    const [isLoaded, setIsLoaded] = useState(false);

    const loadFFmpeg = async () => {
        //Get the current FFmpeg instance from the reference
        const ffmpegInstance = ffmpegRef.current;

        //Check if FFmpeg is already loaded, if so, set the isLoaded state to true and return
        if (ffmpegInstance.loaded) {  
            setIsLoaded(true);
            return;
        }

        //Define the base URL for the FFmpeg core files (This is where the FFmpeg core JavaScript and WebAssembly files are hosted)
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'; 
        await ffmpegInstance.load({
            //Get ffmpeg core js et wasm with blob to avoid CORS issues
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });

        setIsLoaded(true); //Set the isLoaded state to true once FFmpeg has finished loading
    }

    const convertFile = async (file: File, outputFormat: string) => {
        const ffmpeg = ffmpegRef.current;

        const inputFileName = file.name;
        //Generate the output file name by replacing the original file ext to the output desired format
        const outputFileName = `converted_${inputFileName.substring(0, inputFileName.lastIndexOf('.'))}.${outputFormat}`;

        //Write the given file to the ffmpeg virtual fs
        await ffmpeg.writeFile(inputFileName, await fetchFile(file));

        //Exec ffmpeg command to convert the file
        await ffmpeg.exec(["-i", inputFileName, outputFileName]);

        //Read the converted file from the ffmpeg virtual fs
        const data = await ffmpeg.readFile(outputFileName);

        //Create a Blob from the converted file data and generate a URL for it
        const blob = new Blob([new Uint8Array(data as ArrayLike<number>)]);
        const url = URL.createObjectURL(blob);

        return { url, name: outputFileName };
    };

    return { isLoaded, loadFFmpeg, convertFile };
}