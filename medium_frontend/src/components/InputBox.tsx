
type type = "email"|"password"|"text"

interface inputBox {
  type?:type,
  label: string,
  placeholder?: string,
  value?: string,
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const InputBox = ({ type,label, placeholder, onChange }: inputBox) => {

  return (
    <div className="font-popping mt-2">
      <div className="text-lg font-semibold">
        <label htmlFor={label}>{label}</label>
      </div>
      <div className="mt-1 p-1">
        <input type={type} placeholder={placeholder} className="invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-red-500 focus:invalid:ring-red-500 placeholder:text-[#959597] placeholder:font-poppins placeholder:font-medium px-3 py-2 w-full border border-gray-200 rounded-[6px]" id={label} onChange={onChange} />
      </div>
    </div>
  );
};
