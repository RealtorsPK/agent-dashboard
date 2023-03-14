import Overview from '../../components/module/dashboard/overview-section';
import PageHeading from '../../components/ui/page-heading';

const Dashboard = () =>
  <div>
    <div>
      <PageHeading />
    </div>
    <div className="mt-[20px]">
        <Overview />
    </div>
  </div>;

export default Dashboard;
