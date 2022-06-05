import './App.css';
import {AssetDetails} from './Component/AssetManagement/AssetDetails/AssetDetails';
import  AssetTable  from './Component/AssetManagement/AssetTable/AssetTable';

function App() {
  return (
    <div>
   <h1>Hello World</h1>
   {/* <Asset1/> */}
   <AssetDetails/>
   <AssetTable/>
   </div>
  );
}

export default App;
