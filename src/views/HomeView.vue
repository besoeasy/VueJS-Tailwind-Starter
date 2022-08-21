<template>
	<div>
		<main_land />
		<feature_now />
	</div>
</template>

<script>
	import main_land from '@/components/main_land.vue';
	import feature_now from '@/components/feature_now.vue';

	export default {
		components: {
		main_land, feature_now
		},
	};
</script>
