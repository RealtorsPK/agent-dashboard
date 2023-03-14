import { overViewCardsData } from '../../../../utilities/static-values';

import Graphs from './graphs';
import OverViewCard from './over-card';

const Overview = () => (
  <div>
    {/* Cards section */}
    <div className="grid grid-cols-3 md:grid-cols-5 gap-[20px]">
      <OverViewCard overViewCardsData={overViewCardsData} />
    </div>
    {/* Graph Section */}
    <div className="mt-[25px]">
       <Graphs />
    </div>
  </div>

);

export default Overview;

