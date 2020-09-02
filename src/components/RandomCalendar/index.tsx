import React from 'react';
import Heatmap from 'react-calendar-heatmap';
/**subtrair dia atual menos 1 ano, comparar se é o mesmo dia */
import {subYears, isBefore, isSameDay, addDays} from 'date-fns'; 

import { Container } from './styles';

type HeatmapValue = { date: Date; count: number};

const RandomCalendar: React.FC = () => {

const startDate = subYears(new Date(), 1);
const endDate = new Date();

  return(
    <Container>
      <div className="wrapper">
        <Heatmap
        startDate={startDate}
        endDate={endDate}
        values={generateHeatmapValues(startDate, endDate)}
        gutterSize={3.5}
        classForValue={(item: HeatmapValue)=> {
          let clampedCount = 0;
          /**se diferente de 0, os valores ficaram entre 0 e 4  */
          /**se enviar mais de 4 commits tera o valor 4*/
          if(item !== null){
            clampedCount = Math.max(item.count, 0);
            clampedCount = Math.min(item.count, 4);

          }
          return `scale-${clampedCount}`;
        }}
        showWeekdayLabels
        />
      </div>
      <span>Calendario aleatorio, nao representa os dados atuais</span>
    </Container>
    );
};

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];
 /**pegar data de inicio */
  let currentDate = startDate;
  /**enquanto o dia atual for antes do dia de fim agente manten o loop de dentro
   * caso o dia atual seja o mesmo dia que o dia final continua o loop
   */
  while(isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)){
    /**contador de 0 a 4 */
    const count = Math.random() * 4;
    /**deixar como um numero interiro (arendondar o count )*/

    values.push({date: currentDate, count: Math.round(count)});
    /** a data atual passar a ser  data de hoje adicionando um dia  */
    currentDate = addDays(currentDate, 1);
  }
  return values; /**retorne o arrray */
}

export default RandomCalendar;