import { Loader } from '../../../../../components/ui/loader';
import { NoData } from '../../../../../components/ui/no-data';
import { Table, TableWrap, Tbody, Td, Th, Thead, Tr } from '../../../../../components/ui/table';
import { currencyFormat } from '../../../../../utilities/helper-function';

const InnerTable = ({ data, loading, onEdit }) => (
  <TableWrap className="pb-[60px] h-[calc(100vh-170px)]">
    <Table>
      <Thead>
        <Tr>
          <Th className="uppercase">{'Id'}</Th>
          <Th className="uppercase">{'Title'}</Th>
          <Th className="uppercase">{'category'}</Th>
          <Th className="uppercase">{'city'}</Th>
          <Th className="uppercase">{'area'}</Th>
          <Th className="uppercase">{'size'}</Th>
          <Th className="uppercase">{'price'}</Th>
          <Th className="uppercase">{'address'}</Th>
          <Th className="uppercase">{'Action'}</Th>
        </Tr>
      </Thead>

      <Tbody>
        {
          data.items.length ?
            data.items.map((item) => (
              <Tr key={item.id}>
                <Td className="truncate max-w-[80px]" title={item.id}>{item.id}</Td>
                <Td className="truncate max-w-[100px]" title={item.title}>{item.title}</Td>
                <Td className="truncate max-w-[100px]" title={item.category && item.category.name}>{item.category && item.category.name}</Td>
                <Td className="truncate max-w-[80px]" title={item.city && item.city.name}>{item.city && item.city.name}</Td>
                <Td className="truncate max-w-[80px]" title={item.area && item.area.name}>{item.area && item.area.name}</Td>
                <Td className="truncate max-w-[80px]" title={item.size}>
                  {item.size}
                  <span className="text-[10px] ml-[3px]">{`(${item.sizeUnit})`}</span>
                </Td>
                <Td className="truncate max-w-[80px]" title={item.price}>{currencyFormat(item.price)}</Td>
                <Td className="truncate max-w-[100px]" title={item.address}>{item.address}</Td>
                <Td className="truncate max-w-[80px]" title={item.status}><button onClick={() => onEdit(item.id)} type="button">{'Edit'}</button></Td>
              </Tr>
            ))
            : undefined
        }
      </Tbody>
    </Table>
    {
      loading ?
        <div className="text-center mt-[50px]">
          <Loader />
        </div>
        :
        !loading && data.items.length <= 0 &&
        <div className="text-center mt-[50px]">
          <NoData />
        </div>
    }
  </TableWrap>
);

export default InnerTable;
