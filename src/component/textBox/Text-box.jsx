import "./Text-box.css";

const TextBox = ({icon, title}) => {
    return (
        <div className="flex" style={{ borderBottom: "2px solid #81fdff" }}>
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <h3>{icon}</h3>
            </span>
            <input
                type="text"
                id="website-admin"
                className="bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={`${title}`}
            />
        </div>
    )
}

export default TextBox;