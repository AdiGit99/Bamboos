// import Chart from "../../components/portal/chart";
import "./dashboard.css";
import WidgetSm from "../../../components/providers/widgetSm/WidgetSm";
import WidgetLg from "../../../components/providers/widgetLg/WidgetLg";
import FeaturedInfo from "../../../components/providers/featuredInfo/FeaturedInfo.js.js";

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
