import { IRow, IFieldTransform } from '../interfaces';
import { transformData } from '../lib/transform';

const main = (e: { data: { dataSource: IRow[]; trans: IFieldTransform[] } }) => {
    const { dataSource, trans } = e.data;
    transformData(dataSource, trans)
        .then((ans) => {
            self.postMessage(ans);
        })
        .catch((error) => {
            self.postMessage({ error: error.message });
        });
};

self.addEventListener('message', main, false);
