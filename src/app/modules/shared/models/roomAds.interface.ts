export interface IroomAds {
  adBasicDataForm: {
    adTitle: string;
    adDescription: string;
    campaignDuration: { start: string; end: string };
  };
  targetAdServicesForm: {
    google: boolean;
    bing: boolean;
    amazon: boolean;
    facebook: boolean;
    booking: boolean;
  };
}
