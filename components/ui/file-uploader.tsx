"use client"

import * as React from "react"
import { Upload, X, FileText, Image as ImageIcon, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

interface FileUploaderProps {
  onFilesChange?: (files: File[]) => void
  maxFiles?: number
  className?: string
}

export function FileUploader({ onFilesChange, maxFiles = 15, className }: FileUploaderProps) {
  const [files, setFiles] = React.useState<{ file: File; progress: number; id: string }[]>([])
  const [isDragging, setIsDragging] = React.useState(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    addFiles(droppedFiles)
  }

  const addFiles = (newFiles: File[]) => {
    const validFiles = newFiles.slice(0, maxFiles - files.length)
    const fileObjects = validFiles.map(file => ({
      file,
      progress: 0,
      id: Math.random().toString(36).substring(7)
    }))
    
    setFiles(prev => [...prev, ...fileObjects])
    
    // Simulate upload progress
    fileObjects.forEach(obj => {
      let p = 0
      const interval = setInterval(() => {
        p += Math.random() * 30
        if (p >= 100) {
          p = 100
          clearInterval(interval)
        }
        setFiles(prev => prev.map(f => f.id === obj.id ? { ...f, progress: p } : f))
      }, 300)
    })
  }

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id))
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={cn(
          "border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center gap-4 transition-all cursor-pointer",
          isDragging ? "border-ci-strong bg-ci-strong/5 scale-[1.01]" : "border-ci-concrete hover:border-ci-muted hover:bg-ci-bg"
        )}
        onClick={() => {
          const input = document.createElement('input')
          input.type = 'file'
          input.multiple = true
          input.onchange = (e) => {
            const selected = Array.from((e.target as HTMLInputElement).files || [])
            addFiles(selected)
          }
          input.click()
        }}
      >
        <div className="w-16 h-16 bg-ci-concrete rounded-full flex items-center justify-center text-ci-slate">
          <Upload className="w-8 h-8" />
        </div>
        <div className="text-center">
          <p className="font-bold text-ci-ink">Click to upload or drag and drop</p>
          <p className="text-sm text-ci-slate">JPEG, PNG, HEIC up to 10MB each</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <AnimatePresence>
          {files.map((f) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="card p-3 flex items-center gap-3 relative group"
            >
              <div className="w-10 h-10 bg-ci-concrete rounded flex items-center justify-center text-ci-slate shrink-0">
                {f.file.type.startsWith('image/') ? <ImageIcon className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate text-ci-ink">{f.file.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1 bg-ci-concrete rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-ci-strong transition-all duration-300" 
                      style={{ width: `${f.progress}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-ci-slate">{Math.round(f.progress)}%</span>
                </div>
              </div>
              {f.progress === 100 && <CheckCircle2 className="w-4 h-4 text-ci-success shrink-0" />}
              <button 
                onClick={(e) => { e.stopPropagation(); removeFile(f.id) }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-ci-concrete rounded-full flex items-center justify-center text-ci-danger opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {files.length > 0 && (
        <p className="text-[10px] text-ci-muted text-center italic">
          Files are encrypted in transit. Do not upload sensitive personal data.
        </p>
      )}
    </div>
  )
}
