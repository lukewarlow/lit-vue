import {defineComponent} from "../utils/component";
import {html} from "lit-html";

export default defineComponent({
	name: 'CounterWrapper',
	props: {
		count: {
			type: Object,
			default: {
				data: 0
			}
		}
	},
	setup(props, ctx) {
		return () => {
			return html`
                <div>
                    ${props.count.value.data}
                    <base-counter .count=${props.count.value} />
                </div>
			`;
		}
	}
});
