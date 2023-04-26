const time = {
  abbreviation: 'JST',
  client_ip: '124.110.45.125',
  datetime: '2023-04-27T07:31:35.424333+09:00',
  day_of_week: 4,
  day_of_year: 117,
  dst: false,
  dst_from: null,
  dst_offset: 0,
  dst_until: null,
  raw_offset: 32400,
  timezone: 'Japan',
  unixtime: 1682548295,
  utc_datetime: '2023-04-26T22:31:35.424333+00:00',
  utc_offset: '+09:00',
  week_number: 17,
};
type Time = typeof time;

export default async function getTime() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch('http://worldtimeapi.org/api/timezone/Japan', {
    next: { revalidate: 60 },
  });
  const data: Time = await res.json();
  return data;
}
