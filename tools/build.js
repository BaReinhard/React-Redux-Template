/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'dev';

webpack(webpackConfig).run((err,stats)=>{
  if(err){
    console.log(err.bold.red);
    return 1;
  }
  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error=>console.log(error.red));
  }
  if(jsonStats.hasWarnings){
    jsonStats.warnings.map(warning=>console.log(warning.yellow));
  }
  return 0;
});
