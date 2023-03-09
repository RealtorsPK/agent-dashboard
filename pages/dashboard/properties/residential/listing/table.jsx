import { Loader } from '../../../../../components/ui/loader';
import { NoData } from '../../../../../components/ui/no-data';
import { Table, TableWrap, Tbody, Td, Th, Thead, Tr } from '../../../../../components/ui/table';
import { currencyFormat } from '../../../../../utilities/helper-function';

const InnerTable = ({ data, loading }) => (
  <TableWrap className="pb-[60px] h-[calc(100vh-160px)]">
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
                <Td className="truncate max-w-[80px]">{item.id}</Td>
                <Td className="truncate max-w-[100px]">{item.title}</Td>
                <Td className="truncate max-w-[100px]">{item.category && item.category.name}</Td>
                <Td className="truncate max-w-[80px]">{item.city && item.city.name}</Td>
                <Td className="truncate max-w-[80px]">{item.area && item.area.name}</Td>
                <Td className="truncate max-w-[80px]">
{item.size}
{' '}
{'('}
{item.sizeUnit}
{')'}
                </Td>
                <Td className="truncate max-w-[80px]">{currencyFormat(item.price)}</Td>
                <Td className="truncate max-w-[100px]">{item.address}</Td>
                <Td className="truncate max-w-[80px]">{item.status}</Td>
              </Tr>
            ))
            : undefined
        }
      </Tbody>
    </Table>
    {
      data.items.length <= 0 && loading ?
        <div className="text-center mt-[50px]">
          <Loader />
        </div>
        :
        <div className="text-center mt-[50px]">
          <NoData />
        </div>
    }
  </TableWrap>
);

export default InnerTable;
