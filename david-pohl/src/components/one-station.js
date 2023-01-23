export default function OneStation() {
    return (
        <div className="border border-black">
            <div className="flex flex-row">
                <div className="border border-black basis-3/4">
                    <h1 className="text-xl">Heidelberg University</h1>
                </div>
                <div className="border border-red-700 basis-1/4">
                    <p className="text-gray-700">Oct 2020 ~ Aug 2023</p>
                </div>
            </div>
            <p className="text-lg text-center">B.Sc. Computer Science</p>
            <div className="flex flex-row gap-20 justify-center">
                <p>German GPA: 1.1</p>
                <p className="m">GPA: 3.9/4.0</p>
            </div>




        </div>
    )
}