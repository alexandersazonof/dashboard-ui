import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MAIN_ROUTES } from './shared/constants/routes.constant';
import { MENU_ITEMS } from './shared/constants/menu.constant';
import { UsersRefModule } from './pages/users-ref/users-ref.module';

const routes: Routes = [
  {
    path: MAIN_ROUTES[MENU_ITEMS.USER_STAT],
    loadChildren: () => import('./pages/user-stat/user-stat.module').then(m => m.UserStatModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.HERO_STAT],
    loadChildren: () => import('./pages/hero-stat/hero-stat.module').then(m => m.HeroStatModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.ITEM_STAT],
    loadChildren: () => import('./pages/item-stat/item-stat.module').then(m => m.ItemStatModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.NEW_USERS],
    loadChildren: () => import('./pages/new-users/new-users.module').then(m => m.NewUsersModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.NEW_HEROES],
    loadChildren: () => import('./pages/new-heroes/new-heroes.module').then(m => m.NewHeroesModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.STORY_STAT],
    loadChildren: () => import('./pages/story-stat/story-stat.module').then(m => m.StoryStatModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.TOKENOMICS],
    loadChildren: () => import('./pages/tokenomics/tokenomics.module').then(m => m.TokenomicsModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.TOKENOMICS_CHART],
    loadChildren: () => import('./pages/tokenomics-stat/tokenomics-stat.module').then(m => m.TokenomicsStatModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.TOKENS_TRANSACTIONS],
    loadChildren: () => import('./pages/token-transactions/token-transactions.module').then(m => m.TokenTransactionsModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.USER_GENERAL_STAT],
    loadChildren: () => import('./pages/user-general-stat/user-general-stat.module').then(m => m.UserGeneralStatModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.PAWNSHOP_CHART],
    loadChildren: () => import('./pages/pawnshop-chart/pawnshop-chart.module').then(m => m.PawnshopChartModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.USERS_REF],
    loadChildren: () => import('./pages/users-ref/users-ref.module').then(m => m.UsersRefModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.DAU_CHART],
    loadChildren: () => import('./pages/dau-chart/dau-chart.module').then(m => m.DauChartModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.TX_CHART],
    loadChildren: () => import('./pages/total-tx/total-tx.module').then(m => m.TotalTxModule),
  },
  {
    path: MAIN_ROUTES[MENU_ITEMS.USERS_RATIO_EARN],
    loadChildren: () => import('./pages/users-ratio-earn/users-ratio-earn.module').then(m => m.UsersRatioEarnModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: MAIN_ROUTES[MENU_ITEMS.USER_STAT],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
