import OneStation from "./one-station";

export default function Education() {
    return (
        <>
            <OneStation></OneStation>
            <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium">David Pohl</h2>
                <h3 className="text-2xl py-2">Computer Science Student</h3>
                <p className="text-md py-5 leading-8 text-gray-800">Highly motivated Computer Science Student at Heidelberg University, Germany.</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 300" width="100%">
                <path id="cologne"
                    d="M-107.057667,187h233.299266l38.883212-207.780489l38.883212,189.700723l38.883212-189.700723L281.774447,187h1104.283214"
                    transform="matrix(1.285902 0 0 1.285902 137.665675 46.721672)" fill="none" stroke-width="15" stroke="#666666" stroke-opacity="0.5"
                />
            </svg>
        </>
    )
}