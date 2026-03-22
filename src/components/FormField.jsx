export const FormField = ({ id, label, type, ...rest }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} className="form-control" {...rest} />
    </div>
  );
};
