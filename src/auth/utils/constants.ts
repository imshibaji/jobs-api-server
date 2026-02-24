import configuration from '../../config/configuration';

export const jwtConstants = {
  secret: configuration().app_secret_key,
};
