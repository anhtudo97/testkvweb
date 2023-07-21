import { format, getHours, getMinutes } from 'date-fns';

export function isValidUrl(domain: string) {
  const pattern = new RegExp(
    '^([a-zA-Z]+:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i',
  );
  return pattern.test(domain);
}

export function covertDateVi(date: Date) {
  const hours = getHours(date);
  const minutes = getMinutes(date);

  const formatDate = format(date, 'dd/MM/yyyy');

  return `${hours} giờ ${minutes} phút, ngày ${formatDate}`;
}
