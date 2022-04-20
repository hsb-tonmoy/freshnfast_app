const smoothies = [
	{
		title: 'Green Maschine',
		img_url: '/images/smoothie1.jpg',
		price: '9.99',
		calories: '450',
		quantity: 1,
		description:
			'Banana, frozen mango, spinach, spirulina powder, organic orange juice, avocado or almond butter and milk of choice.',
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
		title: 'Mango Tango',
		img_url: '/images/smoothie2.jpg',
		price: '9.99',
		calories: '450',
		quantity: 1,
		description:
			'Fresh mango, banana, plain yogurt, water, fresh lemon juice, organic orange juice and milk of choice.',
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
		title: 'Very Berry',
		img_url: '/images/smoothie3.jpg',
		price: '9.99',
		calories: '450',
		quantity: 1,
		description:
			'Strawberry, blueberry, blackberry, raspberry, vanilla greek yogurt, organic orange or mango juice, touch of lime, coconut milk and sweetener of choice.',
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
		title: 'Energy Builder',
		img_url: '/images/smoothie4.jpg',
		price: '9.99',
		calories: '450',
		quantity: 1,
		description:
			'Protein powder, banana, oats, peanut butter, strawberry, plain yogurt and milk of choice.',
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
		title: 'Lake Shake',
		img_url: '/images/smoothie5.jpg',
		price: '9.99',
		calories: '450',
		quantity: 1,
		description:
			'Kale, spinach, frozen fruits - mango, orange, pineapple, granny smith apple, hemp seeds, chia seeds, frozen berries and milk of choice.',
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
		body: JSON.stringify(smoothies)
	};
}
