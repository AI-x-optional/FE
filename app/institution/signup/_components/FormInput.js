export default function FormInput(props) {
    const { label, type, name, autoComplete, placeholder } = props;

    return (
        <>
            <label 
                className="block text-sm font-medium leading-6 text-gray-900">
                    {label}
            </label>
            <div className="mt-2">
                <input
                    type={type}
                    name={name}
                    autoComplete={autoComplete}
                    className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    placeholder={placeholder}
                />
            </div>
        </>
    );
}