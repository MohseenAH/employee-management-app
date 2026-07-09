import { TrendingUp } from "lucide-react";

function StatCard(props) {
  const {
    title,
    value,
    subtitle,
    color,
  } = props;

  const Icon = props.icon;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-slate-100 transition-all duration-300 group-hover:scale-125" />

      <div className="relative flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-800">
            {value}
          </h2>

          <div className="mt-5 flex items-center gap-2">

            <TrendingUp
              size={16}
              className="text-green-600"
            />

            <span className="text-sm font-medium text-green-600">
              {subtitle}
            </span>

          </div>

        </div>

        <div
          className={`${color} flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg`}
        >
          {Icon && <Icon size={30} />}
        </div>

      </div>

    </div>
  );
}

export default StatCard;