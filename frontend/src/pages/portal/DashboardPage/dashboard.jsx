// import Chart from "../../components/portal/chart";
import "./dashboard.css";
import WidgetSm from "../../../components/portal/widgetSm/WidgetSm";
import WidgetLg from "../../../components/portal/widgetLg/WidgetLg";
import FeaturedInfo from "../../../components/portal/featuredInfo/FeaturedInfo.js.js";

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
