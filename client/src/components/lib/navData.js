import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
 
export const navData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        name: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <TravelExploreIcon/>,
        name: "Explore",
        link: "explore"
    },
    {
        id: 2,
        icon: <BarChartIcon/>,
        name: "Statistics",
        link: "statistics"
    },
    {
        id: 3,
        icon: <SettingsIcon/>,
        name: "Settings",
        link: "settings"
    }
]