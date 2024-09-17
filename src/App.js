import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArmorSets from './components/pages/ArmorSets';
import BargainerStatues from './components/pages/BargainerStatues';
import Bosses from './components/pages/Bosses';
import BridlesSaddles from './components/pages/BridlesSaddles';
import CavesBubblefrog from './components/pages/CavesBubblefrog';
import Characters from './components/pages/Characters';
import Chasms from './components/pages/Chasms';
import EnergyWells from './components/pages/EnergyWells';
import Enhancements from './components/pages/Enhancements';
import GreatFairyFountains from './components/pages/GreatFairyFountains';
import Health from './components/pages/Health';
import HudsonSigns from './components/pages/HudsonsSigns';
import HyruleCompendium from './components/pages/HyruleCompendium';
import KorokSeeds from './components/pages/KorokSeeds';
import LightrootDepthsMap from './components/pages/Lightroots';
import MainQuests from './components/pages/MainQuests';
import SkyViewTowersMap from './components/pages/SkyViewTowersMap';
import MemoriesDragonTears from './components/pages/MemoriesDragonTears';
import MonsterMedals from './components/pages/MonsterMedals';
import NamedLocations from './components/pages/NamedLocations';
import OldMaps from './components/pages/OldMaps';
import PurahPad from './components/pages/PurahPad';
import Recipes from './components/pages/Recipes';
import SagesWills from './components/pages/SagesWills';
import Schematics from './components/pages/Schematics';
import ShrineQuests from './components/pages/ShrineQuests';
import SideAdventures from './components/pages/SideAdventures';
import SideQuests from './components/pages/SideQuests';
import SkyShrinesChests from './components/pages/SkyShrinesChests';
import Stables from './components/pages/Stables';
import Stamina from './components/pages/Stamina';
import SurfaceShrinesChests from './components/pages/SurfaceShrinesChests';
import TownsSettlements from './components/pages/TownsSettlements';
import Wells from './components/pages/Wells';
import ZonaiDispensers from './components/pages/ZonaiDispensers';

function App() {
  return (
      <Router>
        {/* <Overview /> */}
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/armor-sets' element={<ArmorSets />} />
          <Route path='/bargainer-statues' element={<BargainerStatues />} />
          <Route path='/bosses' element={<Bosses />} />
          <Route path='/bridles-saddles' element={<BridlesSaddles />} />
          <Route path='/caves-bubblefrog' element={<CavesBubblefrog />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/chasms' element={<Chasms />} />
          <Route path='/energy-wells' element={<EnergyWells />} />
          <Route path='/enhancements' element={<Enhancements />} />
          <Route path='/great-fairy-fountains' element={<GreatFairyFountains />} />
          <Route path='/health' element={<Health />} />
          <Route path='/hudsons-signs' element={<HudsonSigns />} />
          <Route path='/hyrule-compendium' element={<HyruleCompendium />} />
          <Route path='/korok-seeds' element={<KorokSeeds />} />
          <Route path='/lightroot-depths-map' element={<LightrootDepthsMap />} />
          <Route path='/main-quests' element={<MainQuests />} />
          <Route path='/skyview-towers-map' element={<SkyViewTowersMap />} />
          <Route path='/memories-dragon-tears' element={<MemoriesDragonTears />} />
          <Route path='/monster-medals' element={<MonsterMedals />} />
          <Route path='/named-locations' element={<NamedLocations />} />
          <Route path='/old-maps' element={<OldMaps />} />
          <Route path='/purah-pad' element={<PurahPad />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/sages-wills' element={<SagesWills />} />
          <Route path='/schematics' element={<Schematics />} />
          <Route path='/shrine-quests' element={<ShrineQuests />} />
          <Route path='/side-adventures' element={<SideAdventures />} />
          <Route path='/side-quests' element={<SideQuests />} />
          <Route path='/sky-shrines-chests' element={<SkyShrinesChests />} />
          <Route path='/stables' element={<Stables />} />
          <Route path='/stamina' element={<Stamina />} />
          <Route path='/surface-shrines-chests' element={<SurfaceShrinesChests />} />
          <Route path='/towns-settlements' element={<TownsSettlements />} />
          <Route path='/wells' element={<Wells />} />
          <Route path='/zonai-dispensers' element={<ZonaiDispensers />} />
        </Routes>

      </Router>
  );
}

export default App;