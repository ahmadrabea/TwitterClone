import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from '@heroicons/react/outline'
import React, { useRef, useState } from 'react'

const Input = () => {
  const [input, setInput] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [showEmojis, setShowEmojis] = useState(false)
  const addImageToPost = () => {}
  const filePickerRef = useRef()
  const addEmoji = (e) => {
    let sym = e.unified.split('-')
    let codesArray = []
    sym.forEach((el) => codesArray.push('0x' + el))
    let emoji = String.fromCodePoint(...codesArray)
    setInput(input + emoji)
  }

  return (
    <div
      className={`flex space-x-3 overflow-y-scroll border-b border-gray-700 p-3`}
    >
      <img
        className="h-11 w-11 cursor-pointer rounded-full"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        alt=""
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={`${selectedFile && 'pb-7'} ${input && 'space-y-2.5'}`}>
          <textarea
            onChange={(event) => setInput(event.target.value)}
            value={input}
            rows="2"
            placeholder="What's happening?"
            className="min-h-[50px] w-full bg-transparent
            text-lg tracking-wide text-[#d9d9d9] placeholder-gray-500 outline-none"
          />
          {selectedFile && (
            <div className="relative">
              <div
                onClick={() => setSelectedFile(null)}
                className="absolute top-1 left-1 flex h-8 w-8 cursor-pointer 
            items-center justify-center rounded-full bg-[#15181c] bg-opacity-75 hover:bg-[#272c26]"
              >
                <XIcon className="h-5 text-white" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="max-h-80 rounded-2xl object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div
              className="icon"
              onClick={() => {
                filePickerRef.current.click()
              }}
            >
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
              <input
                className="hidden"
                type="file"
                onChange={addImageToPost}
                ref={filePickerRef}
              />
            </div>
            <div className="icon rotate-90">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>

            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
            </div>

            <div className="icon">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            {showEmojis && (
              <Picker
                onSelect={addEmoji}
                style={{
                  position: 'absolute',
                  marginTop: '465px',
                  marginLeft: -40,
                  maxWidth: '320px',
                  borderRadius: '20px',
                }}
                theme="dark"
              />
            )}
          </div>
          <button
            className="rounded-full bg-[#1d9bf0] px-4 py-1.5 font-bold text-white shadow-md hover:bg-[#1a8cd8] disabled:cursor-default disabled:opacity-50 disabled:hover:bg-[#1d9bf0]"
            disabled={!input.trim() && !selectedFile}
            //onClick={sendPost}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  )
}

export default Input
