// src/components/PersonalData.js

const PersonalData = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-[#232E40] text-2xl font-bold mb-2">
          Персональные данные
        </h1>
        <p className="text-[#777E90] text-sm">
          Обновите свои данные и узнайте, как мы их используем.
        </p>
      </div>

      <div className="flex items-center mb-6">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-500">Изображение</span>
        </div>
        <button className="text-blue-500 ml-4">Добавить</button>
      </div>

      <ul className="space-y-4">
        {[
          { label: 'Имя', value: 'Алексей Пашкин' },
          {
            label: 'Отображаемое имя',
            value: 'Укажите имя, которое будет отображаться на сайте',
          },
          {
            label: 'Email',
            value: 'alex.pashkin93@gmail.com',
            verified: false,
          },
          {
            label: 'Номер телефона',
            value: 'Номер телефона, по которому с вами смогут связаться',
          },
          { label: 'Дата рождения', value: 'Введите дату вашего рождения' },
          { label: 'Гражданство', value: 'Выберите страну/регион гражданства' },
          { label: 'Пол', value: 'Укажите ваш пол' },
          { label: 'Адрес', value: 'Укажите ваш адрес' },
          { label: 'Паспортные данные', value: 'Не указано' },
        ].map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-3 border-b"
          >
            <div className="text-[#232E40]">{item.label}</div>
            <div className="text-[#777E90]">{item.value}</div>
            <button className="text-blue-500">Изменить</button>
            {item.verified === false && (
              <span className="text-red-500 text-sm">Не проверено</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalData;
