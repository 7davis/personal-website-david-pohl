export default function EducationStation(props) {

    console.log(props.facts);

    const facts = props.facts.map((e, i) => {
        return (<tr key={i} className="bg-white border-gray-700 dark:bg-transparent">
            <th scope="row" className="ml-3 mt-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <span className="text-blue-800 font-bold mr-2 px-2.5 py-0.5 rounded dark:text-dav-aquamarine-500 uppercase">{ e.key }</span>
            </th>
            <td className="px-3 py-2 capitalize">
                { e.value }
            </td>
        </tr>);
    });
    console.log(facts);

    return (
        <li className="mb-16 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 uppercase">{ props.startDate } - { props.endDate }</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase">{props.institution}</h3>
            <h3 className="text-gray-900 dark:text-gray-400 uppercase">{props.level}</h3>
            <div className="relative overflow-x-auto mt-2">
                <table className="text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                        { facts }
                    </tbody>
                </table>
            </div>
        </li>
    );
}