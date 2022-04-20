const shots = [
	{
		title: 'Wake Me Up',
		img_url: '/images/shot1.jpg',
		price: '9.99',
		calories: '450',
		quantity: 1,
		description:
			'Romaine lettuce, shredded parmesan, tomatoes and roasted chicken tossed with our caesar dressing.',
		nutrients: [
			{
				name: 'Calories',
				value: '450'
			},
			{
				name: 'Fat',
				value: '20g'
			},
			{
				name: 'Carbs',
				value: '50g'
			},
			{
				name: 'Protein',
				value: '20g'
			},
			{
				name: 'Sodium',
				value: '1,000mg'
			},
			{
				name: 'Fiber',
				value: '20g'
			},
			{
				name: 'Cholesterol',
				value: '1mg'
			},
			{
				name: 'Saturated Fat',
				value: '20g'
			}
		]
	},
	{
		title: 'Immunity Shot',
		img_url: '/images/shot2.jpg',
		price: '9.99',
		calories: '450',
		quantity: 1,
		description:
			'Baby spinach, grilled shrimp, tangerine slices, carrots, cranberries, slivered almonds and crispy wontons tossed with our asian vinaigrette.',
		nutrients: [
			{
				name: 'Calories',
				value: '450'
			},
			{
				name: 'Fat',
				value: '20g'
			},
			{
				name: 'Carbs',
				value: '50g'
			},
			{
				name: 'Protein',
				value: '20g'
			},
			{
				name: 'Sodium',
				value: '1,000mg'
			},
			{
				name: 'Fiber',
				value: '20g'
			},
			{
				name: 'Cholesterol',
				value: '1mg'
			},
			{
				name: 'Saturated Fat',
				value: '20g'
			}
		]
	},
	{
		title: 'Detox Shot',
		img_url: '/images/shot3.jpg',
		price: '9.99',
		calories: '450',
		quantity: 1,
		description:
			'lemon oregano chicken, rice, tomatoes, cucumber, olives, feta cheese, red onion, fresh herbs, and finished with tzatziki sauce.',
		nutrients: [
			{
				name: 'Calories',
				value: '450'
			},
			{
				name: 'Fat',
				value: '20g'
			},
			{
				name: 'Carbs',
				value: '50g'
			},
			{
				name: 'Protein',
				value: '20g'
			},
			{
				name: 'Sodium',
				value: '1,000mg'
			},
			{
				name: 'Fiber',
				value: '20g'
			},
			{
				name: 'Cholesterol',
				value: '1mg'
			},
			{
				name: 'Saturated Fat',
				value: '20g'
			}
		]
	},
	{
		title: 'Hot Shot',
		img_url: '/images/shot4.jpg',
		price: '9.99',
		calories: '450',
		quantity: 1,
		description:
			'Chili-spiced sweet potatoes and roasted bell pepper and plenty of zing from fresh lime.',
		nutrients: [
			{
				name: 'Calories',
				value: '450'
			},
			{
				name: 'Fat',
				value: '20g'
			},
			{
				name: 'Carbs',
				value: '50g'
			},
			{
				name: 'Protein',
				value: '20g'
			},
			{
				name: 'Sodium',
				value: '1,000mg'
			},
			{
				name: 'Fiber',
				value: '20g'
			},
			{
				name: 'Cholesterol',
				value: '1mg'
			},
			{
				name: 'Saturated Fat',
				value: '20g'
			}
		]
	}
];

export function get() {
	return {
		ok: true,
		status: 200,
		body: JSON.stringify(shots)
	};
}
