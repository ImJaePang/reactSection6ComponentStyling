export default function Input({ label, $invalid, ...props }) {

    let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase ";
    let inputClassess = "w-full px-3 py-2 leading-tight border rounded shadow"
    if ($invalid){
        labelClasses += " text-red-400";
        inputClassess += " text-red-700 bg-red-400";
    } else {
        labelClasses += " text-stone-300";
        inputClassess += " text-gray-700 bg-stone-300";
    }

    return (
        <p>
            <label className={labelClasses}>
                {label}
            </label>
            <input
                className={inputClassess}
                {...props}
            />
        </p>
    );
}
