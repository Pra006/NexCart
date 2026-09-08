"use client"

const AddressModal = () => {
  return (
    <div>
    <dialog id="address_modal" className="modal">
  <div className="modal-box max-w-2xl">

    <h3 className="font-bold text-lg mb-6">
      Add Shipping Address
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      {/* Full Name */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          className="input input-bordered w-full"
        />
      </div>

      {/* Phone */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone Number</span>
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="98XXXXXXXX"
          className="input input-bordered w-full"
        />
      </div>

      {/* Province */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Province</span>
        </label>

        <select
          name="province"
          className="select select-bordered w-full"
        >
          <option value="">Select Province</option>
          <option value="Koshi">Koshi Province</option>
          <option value="Madhesh">Madhesh Province</option>
          <option value="Bagmati">Bagmati Province</option>
          <option value="Gandaki">Gandaki Province</option>
          <option value="Lumbini">Lumbini Province</option>
          <option value="Karnali">Karnali Province</option>
          <option value="Sudurpashchim">
            Sudurpashchim Province
          </option>
        </select>
      </div>

      {/* District */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">District</span>
        </label>

        <input
          type="text"
          name="district"
          placeholder="Enter district"
          className="input input-bordered w-full"
        />
      </div>

      {/* Municipality */}
      <div className="form-control sm:col-span-2">
        <label className="label">
          <span className="label-text">Municipality / City</span>
        </label>

        <input
          type="text"
          name="municipality"
          placeholder="Enter municipality or city"
          className="input input-bordered w-full"
        />
      </div>

      {/* Ward */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Ward Number</span>
        </label>

        <input
          type="number"
          name="ward"
          placeholder="Ward No."
          className="input input-bordered w-full"
        />
      </div>

      {/* Landmark */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Landmark</span>
        </label>

        <input
          type="text"
          name="landmark"
          placeholder="Nearby landmark"
          className="input input-bordered w-full"
        />
      </div>

      {/* Address */}
      <div className="form-control sm:col-span-2">
        <label className="label">
          <span className="label-text">Full Address</span>
        </label>

        <textarea
          name="address"
          placeholder="House no., street, area..."
          className="textarea textarea-bordered w-full h-24"
        />
      </div>

    </div>

    {/* Buttons */}
    <div className="modal-action">

      <form method="dialog">
        <button className="btn btn-ghost">
          Cancel
        </button>
      </form>

      <button className="btn btn-primary">
        Save Address
      </button>

    </div>

  </div>

  {/* Click outside to close */}
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  )
}

export default AddressModal
