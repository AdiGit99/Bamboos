// import Chart from "../../components/portal/chart";
import "./dashboard.scss";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";

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
