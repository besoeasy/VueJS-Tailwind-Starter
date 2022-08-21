<template>
	<i_navbar />

	<div class="m-auto container"><router-view /></div>

	<top_footer />
</template>

<script>
	import i_navbar from '@/components/top_navbar.vue';
	import top_footer from '@/components/top_footer.vue';

	export default {
		components: {
			i_navbar,
			top_footer,
		},
	};
</script>
