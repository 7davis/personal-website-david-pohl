function Station(props, detail) {
    return (
        <li className="mb-8 bg-darkest-blue px-5 py-3 rounded">
            <time className="mb-1 text-md font-normal leading-none text-gray-400 dark:text-gray-400 uppercase">{props.startDate} - {props.endDate}</time>
            <h3 className="text-2xl font-bold text-white uppercase mt-2">{props.institution}</h3>
            <h3 className="text-gray-300 uppercase text-xl font-semibold">{props.level}</h3>
            <div className="relative overflow-x-auto mt-3 ml-8">
                {detail}
            </div>
        </li>
    );
}


export function EducationStation(props) {
    const facts = props.facts.map((e, i) => {
        return (
            <tr key={i} className="bg-white border-gray-700 dark:bg-transparent text-lg">
                <th scope="row" className="ml-3 mt-2 font-xl text-gray-900 whitespace-nowrap dark:text-white">
                    <span className="font-semibold mr-2 rounded text-gray-300 uppercase">{e.key}</span>
                </th>
                <td className="pl-4 capitalize text-white">
                    {e.value}
                </td>
            </tr>
        );
    });

    return (
        Station(props,
            <table className="text-left font-xl">
                <tbody>
                    {facts}
                </tbody>
            </table>)
    );
}

export function ProfessionalStation(props) {
    const points = props.points.map((e, i) => {
        return (
            <li className="px-3 py-2 capitalize text-white">
                {e}
            </li>);
    });


    return (
        Station(props,
            <ul className="mt-2 space-y-1 list-disc list-inside text-lg">
                {points}
            </ul>)
    );
}