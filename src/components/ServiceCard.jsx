function ServiceCard({ service }) {
  return (
    <div className="card flex flex-col justify-between">

      <div>
        <div className="flex justify-between gap-2">
          <h3 className="font-bold text-lg break-words">
            {service.name}
          </h3>
          <span>⭐ {service.rating}</span>
        </div>

        <p className="text-gray-400 text-sm mt-1">
          {service.category}
        </p>

        <p className="text-sm mt-2 text-gray-300 break-words">
          {service.desc}
        </p>
      </div>

      <div className="mt-4 space-y-1 text-sm">
        <p className="break-words">📍 {service.location}</p>
        <p className="break-words">📞 {service.phone}</p>
      </div>

      <button className="btn w-full mt-4">
        Telegram orqali bog‘lanish
      </button>

    </div>
  );
}

export default ServiceCard;