import React from 'react'

const App: React.FC = () => {
    return (
        <div className="bg-slate-900 gap-4 flex-col w-screen h-screen flex justify-center items-center">
            <p className="font-bold text-5xl text-white">New DeskThing App</p>

            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Ce4tYw6IE70?si=XoE8ixchNmjHE6-I"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default App
