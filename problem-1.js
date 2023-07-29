const LINKS = {
	reset_password: "/reset-password",
	login: "/",
	signup: "/signup",

	DATA_MODULE: {
		DASHBOARD: {
			home: "/data/dashboard",
		},
		REPORTS: {
			home: "/data/reports",
			CREATE: {
				home: "/data/reports/create",
			},
			VIEW: {
				DYNAMIC: dynamicViewRoute => {
					return {
						home: `/data/reports/view/${dynamicViewRoute}`,
					}
				},
			},
		},
		SUBMISSION: {
			DETAILS: {
				DYNAMIC: dynamicDetailsRoute => {
					return {
						home: `/data/submission/details/${dynamicDetailsRoute}`,
					}
				},
			},
			LIST: {
				home: "/data/submission/list",
			},
		},
		TABLE: {
			CREATE: {
				home: "/data/table/create",
			},
			DETAILS: {
				DYNAMIC: dynamicDetailsRoute => {
					const details = "/data/table/details"
					return {
						home: `${details}/${dynamicDetailsRoute}`,
						UPDATE: () => {
							return {
								DYNAMIC: dynamicUpdateRoute => {
									return {
										home: `${details}/${dynamicDetailsRoute}/update/${dynamicUpdateRoute}`,
									}
								},
							}
						},
					}
				},
				ADD: {
					DYNAMIC: dynamicDetailsRoute => {
						const details = "/data/table/details"
						return {
							home: `${details}//add/${dynamicDetailsRoute}`,
						}
					},
				},
				UPDATE: {
					DYNAMIC: dynamicUpdateRoute => {
						const details = "/data/table/details"
						return {
							home: `${details}/update/${dynamicUpdateRoute}`,
						}
					},
				},
			},
			LIST: {
				home: "/data/table/list",
			},
			UPDATE: {
				DYNAMIC: dynamicUpdateRoute => {
					return {
						home: `/data/table/update/${dynamicUpdateRoute}`,
					}
				},
			},
		},
		UPLOAD: {
			TYPE: {
				home: "/data/upload/type",
			},
			TABLE: {
				new: "/data/upload/table",
			},
			LIST: {
				home: "/data/upload/list",
			},
			DYNAMIC: dynamicUploadRoute => {
				return {
					home: `/data/upload/${dynamicUploadRoute}`,
				}
			},
		},
		SETTINGS: {
			home: "/data/settings",
		},
	},

	INTERVENTION_MODULE: {
		CONCEPT_NOTE: {
			DETAILS: {
				DYNAMIC: dynamicDetailsRoute => {
					return {
						home: `/intervention/concept-note/details/${dynamicDetailsRoute}`,
					}
				},
			},
			LIST: {
				home: "/intervention/concept-note/list",
			},
		},
		DASHBOARD: {
			home: "/intervention/dashboard",
		},
		INTERVENTION: {
			DETAILS: {
				DYNAMIC: dynamicDetailsRoute => {
					return {
						home: `/intervention/details/${dynamicDetailsRoute}`,
					}
				},
			},
			LIST: {
				home: "/intervention/list",
			},
			UPDATE: {
				DYNAMIC: dynamicUpdateRoute => {
					return {
						home: `/intervention/update/${dynamicUpdateRoute}`,
					}
				},
			},
		},
		MONITORING: {
			home: "/intervention/monitoring",
		},
		PARTNER: {
			home: "/intervention/partner",
			LIST: {
				home: "/intervention/partner/list",
			},
		},
		REPORTS: {
			home: "/intervention/reports",
			CREATE: {
				home: "/intervention/reports/create",
			},
			VIEW: {
				DYNAMIC: dynamicViewRoute => {
					return {
						home: `/intervention/reports/view/${dynamicViewRoute}`,
					}
				},
			},
		},
		RESULTS: {
			home: "/intervention/results",
		},
	},
}

/**
 * All permissions available in the system is mapped here, to be used in the app for access control. This eliminates the use of hard-coded strings and offers better type safety.
 */
const Permissions = {
	// * generic permissions
	ADD_USER: "add-user",
	UPLOAD_DATA: "upload-data",

	// * managerial permissions
	MANAGE_ADMIN_SUBMISSIONS: "manage-admin-submissions",
	MANAGE_DATA_MODULE: "manage-data-module",
	MANAGE_DATA_REPORTS: "manage-data-reports",
	MANAGE_DATA_TABLE: "manage-data-table",
	MANAGE_EMPLOYEE_SUBMISSIONS: "manage-employee-submissions",
	MANAGE_MANAGER_SUBMISSIONS: "manage-manager-submissions",

	// * admin permissions
	SYSTEM_MANAGE: "system-manage",

	// * view permissions
	VIEW_DATA_DASHBOARD: "view-data-dashboard",
	VIEW_DATA_TABLE: "view-data-table",
	VIEW_PROFILE: "view-profile",
	VIEW_SUBMISSIONS: "view-submissions",

	// * test permission
	TEST_PERMISSION: "test-permission",
}

const ModuleList = [
	{
		id: 1,
		name: "Data Management",
		items: [
			{
				id: 1,
				name: "KPI Dashboard",
				link: LINKS.DATA_MODULE.DASHBOARD.home,
				isActive: false,
				icon: "speedometer-04",
				permissions: [
					Permissions.VIEW_DATA_DASHBOARD,
					Permissions.SYSTEM_MANAGE,
				],
				subItems: [],
			},
			{
				id: 2,
				name: "Data Tables",
				link: LINKS.DATA_MODULE.TABLE.LIST.home,
				isActive: false,
				icon: "dotpoints-01",
				permissions: [Permissions.VIEW_DATA_TABLE, Permissions.SYSTEM_MANAGE],
				subItems: [],
			},
			{
				id: 3,
				name: "Upload Data",
				link: LINKS.DATA_MODULE.UPLOAD.LIST.home,
				isActive: false,
				icon: "upload-cloud-01",
				permissions: [Permissions.UPLOAD_DATA, Permissions.SYSTEM_MANAGE],
				subItems: [],
			},
			{
				id: 4,
				name: "Submissions",
				link: LINKS.DATA_MODULE.SUBMISSION.LIST.home,
				isActive: false,
				icon: "check-done-02",
				permissions: [Permissions.VIEW_SUBMISSIONS, Permissions.SYSTEM_MANAGE],
				subItems: [],
			},
			{
				id: 5,
				name: "Reports",
				link: LINKS.DATA_MODULE.REPORTS.home,
				isActive: false,
				icon: "file-06",
				permissions: [
					Permissions.MANAGE_DATA_REPORTS,
					Permissions.SYSTEM_MANAGE,
				],
				subItems: [],
			},
			{
				id: 6,
				name: "Settings",
				link: LINKS.DATA_MODULE.SETTINGS.home,
				isActive: false,
				icon: "file-06",
				permissions: [Permissions.ADD_USER, Permissions.SYSTEM_MANAGE],
			},
		],
	},
	{
		id: 2,
		name: "Intervention",
		items: [
			{
				id: 1,
				name: "Intervention Dashboard",
				icon: "dotpoints-01",
				link: LINKS.INTERVENTION_MODULE.DASHBOARD.home,
				isActive: false,
				permissions: [Permissions.TEST_PERMISSION, Permissions.SYSTEM_MANAGE],
				subItems: [],
			},
			{
				id: 2,
				name: "Interventions",
				icon: "dotpoints-01",
				link: LINKS.INTERVENTION_MODULE.INTERVENTION.LIST.home,
				isActive: false,
				permissions: [Permissions.TEST_PERMISSION, Permissions.SYSTEM_MANAGE],
				subItems: [],
			},
			{
				id: 3,
				name: "Concept Notes",
				icon: "lightbulb-04",
				link: LINKS.INTERVENTION_MODULE.CONCEPT_NOTE.LIST.home,
				isActive: false,
				permissions: [Permissions.TEST_PERMISSION, Permissions.SYSTEM_MANAGE],
				subItems: [],
			},
			{
				id: 4,
				name: "Monitoring",
				icon: "search-refraction",
				link: LINKS.INTERVENTION_MODULE.MONITORING.home,
				isActive: false,
				permissions: [Permissions.TEST_PERMISSION, Permissions.SYSTEM_MANAGE],
				subItems: [],
			},
			{
				id: 5,
				name: "Partners",
				icon: "building-07",
				link: LINKS.INTERVENTION_MODULE.PARTNER.LIST.home,
				isActive: false,
				permissions: [Permissions.TEST_PERMISSION, Permissions.SYSTEM_MANAGE],
				subItems: [],
			},
			{
				id: 6,
				name: "Results",
				icon: "bar-chart-10",
				link: LINKS.INTERVENTION_MODULE.RESULTS.home,
				isActive: false,
				permissions: [Permissions.TEST_PERMISSION, Permissions.SYSTEM_MANAGE],
				subItems: [],
			},
			{
				id: 7,
				name: "Reports",
				icon: "file-06",
				link: LINKS.INTERVENTION_MODULE.REPORTS.home,
				isActive: false,
				permissions: [Permissions.TEST_PERMISSION, Permissions.SYSTEM_MANAGE],
				subItems: [],
			},
		],
	},
]

const moduleListAccessController = permissions => {
	let redirectURL = "403",
		c = 0

	const filteredModuleList = []

	L1: {
		ModuleList.map(module => {
			const filteredModule = { ...module }
			filteredModule.items = []

			module.items.map(moduleItem => {
				const filteredItem = { ...moduleItem }
				filteredItem.subItems = []

				// buggy loop
				const hasPermissions = moduleItem.permissions?.map(
					moduleItemPermissions => {
						console.log(++c)
						moduleItem.subItems?.forEach(subItem => {
							const hasPermissions = subItem.permissions?.map(
								subItemPermissions => {
									return Object.values(permissions).includes(subItemPermissions)
								}
							)

							if (hasPermissions) filteredItem.subItems?.push(subItem)
						})

						return Object.values(permissions).includes(moduleItemPermissions)
					}
				)

				if (!filteredItem.subItems.length) delete filteredItem.subItems
				if (hasPermissions) filteredModule.items.push(filteredItem)
			})

			filteredModuleList.push(filteredModule)
		})
	}

	if (filteredModuleList.length > 0) {
		if (filteredModuleList[0].items.length > 0) {
			redirectURL = filteredModuleList[0].items[0].link
				? filteredModuleList[0].items[0].link
				: filteredModuleList[0].items[0].subItems?.length
				? filteredModuleList[0].items[0].subItems[0].link
				: ""
		}
	}

	return {
		permittedModuleList: filteredModuleList,
		redirectURL,
	}
}

const output = moduleListAccessController([Permissions.TEST_PERMISSION])

console.log(output)
