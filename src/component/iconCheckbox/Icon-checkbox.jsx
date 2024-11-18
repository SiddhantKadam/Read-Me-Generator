import "./Icon-checkbox.css";

const Checkbox = ({ id, name, value, onChange, icon, label, checked }) => {
    return (
        <div>
            <input type="checkbox" id={id} name={name} value={value} className="hidden peer" checked={checked} onChange={onChange} />
            <label
                htmlFor={id}
                className="flex items-center justify-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <div className="flex flex-col items-center justify-center">
                    <img src={icon} alt={`${label} icon`} className="mb-2 w-7 h-7 text-sky-500" />
                    <div className="text-lg font-semibold text-center">{label}</div>
                </div>
            </label>
        </div>
    )
}

export default Checkbox;