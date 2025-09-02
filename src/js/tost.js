import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const errorTost = msg => {
  return iziToast.error({
    title: 'Error',
    message: msg,
    position: 'topRight',
  });
};

export const successTost = msg => {
  return iziToast.success({
    title: 'Success',
    message: msg,
    position: 'topRight',
  });
};
