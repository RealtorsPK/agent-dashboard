import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { AddButton } from '../../../../../components/ui/add-button';
import Pagination from '../../../../../components/ui/pagination';
import Tabs from '../../../../../components/ui/tabs';
import { fetchRcProperties } from '../../../../../services/rc-properties';
import { apiInitValues, propertyTabs } from '../../../../../utilities/static-values';

import InnerTable from './table';

const RealResidentialProperties = () => {
  const [properties, setProperties] = useState({ ...apiInitValues });
  const [status, setStatus] = useState('unpublished');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(false);
  const routes = useRouter();

  const goToUrl = () => {
    routes.push('/dashboard/properties/commercial/add-property');
  };

  const onChangePage = (page) => {
    setLoading(true);
    fetchRcProperties(`?page=${page.selected + 1}&pageSize=200&status=${status}`)
      .then((res) => {
        setProperties(res.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    setLoading(true);
    setProperties({ ...apiInitValues });
    fetchRcProperties(`?page=1&pageSize=200&status=unpublished`)
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
          onChange={setStatus}
          options={propertyTabs}
          value={status}
        />
      </div>

      <div className=" bg-white relative">
        <InnerTable
          data={properties}
          loading={loading}
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
