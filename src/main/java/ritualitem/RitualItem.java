package ritualitem;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import ritual.Ritual;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;


@Entity
@Table(name = "ritualitem")
@Getter @Setter
public  class RitualItem extends CrudClass {
	
	@ManyToOne
	@JoinColumn(name="ritual_item_ritual_id")
    @JsonView(Views.Public.class)
	private  Ritual ritual;

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String titulo;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String ok;
	
	

}
