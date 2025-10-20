interface SummaryRowProps {
  label: string;
  value: string;
  className?: string;
  valueClassName?: string;
}

function SummaryRow({
  label,
  value,
  className = "",
  valueClassName = "",
}: SummaryRowProps) {
  const rowClasses = `d-flex justify-content-between ${className}`;
  const valueClasses = `fw-bold ${valueClassName}`;

  return (
    <section className={rowClasses}>
      <span className="text-muted">{label}:</span>
      <span className={valueClasses}>{value}</span>
    </section>
  );
}

export default SummaryRow;
