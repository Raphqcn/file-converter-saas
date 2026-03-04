"use client"; // Indicate that this is a client-side component to Next.js

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFFmpeg } from './hooks/useFFmpeg';

const acceptedFormats = {
    'audio': ['mp3', 'wav', 'ogg', 'aac', 'flac', 'opus', 'm4a'],
    'video': ['mp4', 'webm', 'ogg', 'avi', 'mpeg', 'flv', 'mkv', 'mov'],
    'image': ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'svg']
};

type fileAction = {
    file: File; //The original file that the user uploaded
    category: 'audio' | 'video' | 'image'; //The category of the file (audio, video, or image) determined based on the file extension
    targetFormat: string; //The desired output format for the file conversion
    status: 'pending' | 'converting' | 'done' | 'error'; //The current status of the process
    resultURL?: string; //The future URL for the converted file
    errorMsg?: string; //An optional error message in case the conversion fails
};

export default function Dropzone() {
    const [action, setAction] = useState<fileAction[]>([]);
    const [isConverting, setIsConverting] = useState(false);

    const { isLoaded, loadFFmpeg, convertFile } = useFFmpeg();

    const onDrop = useCallback((acceptedFiles: File[]) => {
        let fileQueue = acceptedFiles;

        if (fileQueue.length > 50) {
            alert('You can only upload up to 50 files at a time.');
            fileQueue = fileQueue.slice(0,50);
        }

        const newAction = fileAction[] = fileQueue.map((file) => {
            let category: 'image' | 'audio' | 'vudeo' | 'unsupported' = 'unsupported';

            if (file.type.includes('image')) category = 'image';
            else if (file.type.includes('audio')) category = 'audio';
            else if (file.type.includes('vudeio')) category = 'video';

            const defaultFormat = category !== 'unsupported' ? acceptedFormats[category][0] : '';

            return {
                file, category, targetFormat: defaultFormat, status: 'pending'
            };
        })
    })
};