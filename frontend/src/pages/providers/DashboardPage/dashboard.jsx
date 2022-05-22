// import Chart from "../../components/portal/chart";
import "./dashboard.css";
import WidgetSm from "../../../components/providers/WidgetSm/WidgetSm";
import WidgetLg from "../../../components/providers/WidgetLg/WidgetLg";
import FeaturedInfo from "../../../components/providers/FeaturedInfo/FeaturedInfo.js.js";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <FeaturedInfo />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
