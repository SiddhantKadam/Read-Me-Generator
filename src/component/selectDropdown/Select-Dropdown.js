import "./Select-Dropdown.css";

const SelectDropdown = ({ icon, label, required, options, value, onChange }) => {
    return (
        <div
            className="flex mt-7"
            style={{ borderBottom: "2px solid #81fdff", position: "relative" }}
        >
            {/* Icon Box */}
            <span className="inline-flex items-center p-2 bg-gray-200 border border-gray-300 border-e-0 dark:bg-gray-600 dark:border-gray-600">
                <img src={`${process.env.PUBLIC_URL}/icons/${icon}`} className="w-10 h-10" />
            </span>

            {/* Custom Select */}
            <select
                className="border-class bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="" disabled>
                    Select {label} {required ? "*" : ""}
                </option>

                {options.map((opt, i) => (
                    <option key={i} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectDropdown;
