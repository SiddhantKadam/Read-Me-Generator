import "./Calender.css";

const Calender = ({ icon, name, value, onChange, placeholder, required }) => {
    return (
        <div className="flex" style={{ borderBottom: "2px solid #81fdff", position: "relative" }}>
            <span className="inline-flex items-center p-2 text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <img src={`${process.env.PUBLIC_URL}/icons/${icon}`} className="w-10 h-10" />
            </span>
            <input
                type="date"
                className="border-class bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={`${placeholder} ${required ? "*" : ""}`} value={value} name={name} onChange={onChange}
            />
        </div>
    )
}

export default Calender;