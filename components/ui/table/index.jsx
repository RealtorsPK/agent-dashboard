
const TableWrap = ({ children, className }) => <div className={` ${className || ''} overflow-scroll h-[calc(100vh-110px)]`}>{children}</div>;

const Table = ({ children, className }) => <table className={`w-full text-left text-text-primary ${className || ''}`}>{children}</table>;

const Thead = ({ children, className }) => <thead className={`sticky top-0 z-[2] shadow-[red_0px_1px_0px_inset,_rgb(229_229_229)_0px_-2px_0px_inset] ${className || ''}`}>{children}</thead>;

const Th = ({ children, className }) => <th className={`bg-[rgb(250,250,250)] text-text-primary text-[12px] font-semibold tracking-[1px] border-t-[0px] border-b-[3px] border-transparent p-[.75rem] ${className || ''}`}>{children}</th>;

const Tbody = ({ children, className }) => <tbody className={`relative ${className || ''}`}>{children}</tbody>;

const Tr = ({ children, className }) => <tr className={String(className || '')}>{children}</tr>;

const Td = ({ children, className }) => <td className={`p-[10px_10px] text-[rgb(118,118,118)_!important] truncate tracking-[0.3px] border-[0px] text-[12px] ${className || ''}`}>{children}</td>;

export {
  TableWrap,
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
};
