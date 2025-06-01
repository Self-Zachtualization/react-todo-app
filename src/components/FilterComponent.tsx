interface FilterComponentType {
  handleTabChange: (tab: string) => void
}
export default function FilterComponent({handleTabChange}: FilterComponentType) {
  return (
    <>
      <button type="button" onClick={() => handleTabChange('all')}
      >
        Show All Tasks
      </button>
      <button type="button" onClick={() => handleTabChange('active')}
      >
        Show Active Tasks
      </button>
      <button type="button" onClick={() => handleTabChange('completed')}
      >
        Show Completed Tasks
      </button>
    </>
  )
}