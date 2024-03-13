import { CanActivateFn } from '@angular/router';

export const recipeGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('username') === null) {
    alert("please login!")
    // this.router.navigate(['/login']);
    return false;
  }
  return true;
};
