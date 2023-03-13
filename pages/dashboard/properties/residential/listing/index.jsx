import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { AddButton } from '../../../../../components/ui/add-button';
import Pagination from '../../../../../components/ui/pagination';
import Tabs from '../../../../../components/ui/tabs';
import { fetchRcProperties } from '../../../../../services/rc-properties';
import { fetchRrProperties } from '../../../../../services/rr-properties';
import { apiInitValues, propertyTabs } from '../../../../../utilities/static-values';

import InnerTable from './table';

const RealResidentialProperties = () => {
  const [properties, setProperties] = useState({ ...apiInitValues });
  const [status, setStatus] = useState('unpublished');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const routes = useRouter();

  const goToUrl = () => {
    routes.push('/dashboard/properties/add-residential-property');
  };

  const onChangePage = (currentPage) => {
    setLoading(true);
    fetchRcProperties(`?page=${currentPage.selected + 1}&pageSize=200&status=${status}`)
      .then((res) => {
        setPage(currentPage.selected);
        setProperties(res.data);
        setLoading(false);
      });
  };

  const onChangeStatus = (value) => {
    setLoading(true);
    setProperties({ ...apiInitValues });

    fetchRcProperties(`?page=${page}&pageSize=200&status=${value}`)
      .then((res) => {
        setStatus(value);
        setProperties(res.data);
        setLoading(false);
      });
  };

  const onEdit = (id) => {
    routes.push(`/dashboard/properties/edit-residential-property?id=${id}`);
  };

  useEffect(() => {
    setLoading(true);
    setProperties({ ...apiInitValues });
    fetchRrProperties('?page=1&pageSize=200&status=unpublished')
      .then((res) => {
        setProperties(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div>

      <AddButton onClick={goToUrl} />

      <div className="mb-[10px]">
        <Tabs
          onChange={onChangeStatus}
          options={propertyTabs}
          value={status}
        />
      </div>

      <div className=" bg-white relative">
        <InnerTable
          data={properties}
          loading={loading}
          onEdit={onEdit}
        />

        <div className="absolute pb-[10px] pt-[10px] bottom-0 right-0 left-0 text-center bg-white">
          <span className="inline-block">
            <Pagination
              onChange={onChangePage}
              pageSize={200}
              total={properties.total}
            />
          </span>
        </div>
      </div>

    </div>
  );
};

export default RealResidentialProperties;
